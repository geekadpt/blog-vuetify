<template>
    <v-container>
        <v-row justify="space-around">
            <v-card width="100%">
                <template>
                    <v-col
                        cols="12"
                    >
                        <v-text-field
                            v-model="title"
                            :rules="[rules.required, rules.counter_100]"
                            label="标题"
                            counter
                            maxlength="100"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                        <v-text-field
                            v-model="excerpt"
                            :rules="[rules.required, rules.counter_200]"
                            label="摘要"
                            counter
                            maxlength="200"
                        ></v-text-field>
                    </v-col>
                </template>
                <template>
                    <v-md-editor
                        v-model="body"
                        height="500px"
                        :disabled-menus="[]"
                        @upload-image="handleUploadImage"
                    />
                </template>
            </v-card>
            <template>
                <v-combobox
                    v-model="category"
                    :items="categories"
                    chips
                    clearable
                    label="文章分类"
                    prepend-icon="mdi-folder-multiple"
                    solo
                    class="col-12 mt-6"
                >
                    <template v-slot:selection="{ attrs, item, select, selected }">
                        <v-chip
                            v-bind="attrs"
                            :input-value="selected"
                            close
                            @click="select"
                            @click:close="remove(item)"
                        >
                            <strong>{{ item }}</strong>&nbsp;
<!--                            <span>(interest)</span>-->
                        </v-chip>
                    </template>
                </v-combobox>
            </template>
            <template>
                    <v-combobox
                        v-model="model"
                        :filter="filter"
                        :hide-no-data="!search"
                        :items="items"
                        :search-input.sync="search"
                        hide-selected
                        multiple
                        small-chips
                        solo
                        clearable
                        label="文章标签"
                        prepend-icon="mdi-tag-multiple"
                    >
                        <template v-slot:no-data>
                            <v-list-item>
                                <span class="subheading">Create</span>
                                <v-chip
                                    :color="`${colors[nonce - 1]} lighten-3`"
                                    label
                                    small
                                >
                                    {{ search }}
                                </v-chip>
                            </v-list-item>
                        </template>
                        <template v-slot:selection="{ attrs, item, parent, selected }">
                            <v-chip
                                v-if="item === Object(item)"
                                v-bind="attrs"
                                :color="`${item.color} lighten-3`"
                                :input-value="selected"
                                label
                                small
                            >
          <span class="pr-2">
            {{ item.text }}
          </span>
                                <v-icon
                                    small
                                    @click="parent.selectItem(item)"
                                >
                                    close
                                </v-icon>
                            </v-chip>
                        </template>
                        <template v-slot:item="{ index, item }">
                            <v-text-field
                                v-if="editing === item"
                                v-model="editing.text"
                                autofocus
                                flat
                                background-color="transparent"
                                hide-details
                                solo
                                @keyup.enter="edit(index, item)"
                            ></v-text-field>
                            <v-chip
                                v-else
                                :color="`${item.color} lighten-3`"
                                dark
                                label
                                small
                            >
                                {{ item.text }}
                            </v-chip>
                            <v-spacer></v-spacer>
                            <v-list-item-action @click.stop>
                                <v-btn
                                    icon
                                    @click.stop.prevent="edit(index, item)"
                                >
                                    <v-icon>{{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </template>
                    </v-combobox>
            </template>
            <template>
                <div class="d-flex justify-space-between mb-6 col-12 pa-0">
                <v-btn
                    :loading="loading_save"
                    :disabled="loading_save"
                    color="blue-grey"
                    class="ma-0 white--text"
                    @click="save()"
                >
                    保存
                    <v-icon
                        right
                        dark
                    >
                        mdi-content-save
                    </v-icon>
                </v-btn>

                <v-btn
                    :loading="loading_publish"
                    :disabled="loading_publish"
                    color="blue-grey"
                    class="ma-0 white--text"
                    @click="publish()"
                >
                    发布
                    <v-icon
                        right
                        dark
                    >
                        mdi-cloud-upload
                    </v-icon>
                </v-btn>
                </div>
            </template>

        </v-row>
    </v-container>
</template>
<script>
    import { EventBus } from '../event-bus.js';
    export default {
        name: "Publish",
        data: () => ({
            title:'',
            excerpt: '',
            body: '',
            category: '',
            // categories: ['Streaming', 'Eating'],

            messages: [
                {
                    from: 'You',
                    message: `Sure, I'll see you later.`,
                    time: '10:42am',
                    color: 'deep-purple lighten-1',
                },
                {
                    from: 'John Doe',
                    message: 'Yeah, sure. Does 1:00pm work?',
                    time: '10:37am',
                    color: 'green',
                },
                {
                    from: 'You',
                    message: 'Did you still want to grab lunch today?',
                    time: '9:47am',
                    color: 'deep-purple lighten-1',
                },
            ],
            //tags cloud
            activator: null,
            attach: null,
            colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
            editing: null,
            editingIndex: -1,
            items: [
                { header: '选择或者创建一个标签' },
                {
                    text: 'Laravel',
                    color: 'red',
                },
                {
                    text: 'Vue',
                    color: 'green',
                },
            ],
            nonce: 1,
            menu: false,
            model: [
                {
                    text: 'Vue',
                    color: 'green',
                },
            ],
            x: 0,
            search: null,
            y: 0,


            loading_save: false,
            loading_publish: false,


            rules: {
                required: value => !!value || 'Required.',
                counter_100: value => value.length <= 100 || 'Max 100 characters',
                counter_200: value => value.length <= 200 || 'Max 200 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },
        }),
        methods: {
            handleUploadImage(event, insertImage, files) {
                // Get the files and upload them to the file server, then insert the corresponding content into the editor
                console.log(files[0]);
                var formdata = new FormData();
                formdata.append('file', files[0]);
                formdata.append('type', 'article');
                this.$store.dispatch('uploadImage',formdata);
                this.$watch(this.$store.getters.getUploadImageStatus, function () {
                    if (this.$store.getters.getUploadImageStatus()  === 2) {
                        var temp = this.$store.getters.getUploadImage;
                        insertImage({
                            url: temp,
                            desc: 'desc',
                            width: 'auto',
                            height: 'auto',
                        });
                        EventBus.$emit('open-message', {
                            text: ' 上传成功!',
                            type: 'success'
                        });
                        this.$store.dispatch('initUploadImageStatus');
                    }
                    if (this.$store.getters.getUploadImageStatus()  === 3) {
                        EventBus.$emit('open-message', {
                            text: this.$store.getters.getUploadImageErrors,
                            type: 'error'
                        });
                        this.$store.dispatch('initArticlesPublishStatus');
                    }
                });
            },
            remove (item) {
                this.category ='';
            },
            edit (index, item) {
                if (!this.editing) {
                    this.editing = item
                    this.editingIndex = index
                } else {
                    this.editing = null
                    this.editingIndex = -1
                }
            },
            filter (item, queryText, itemText) {
                if (item.header) return false

                const hasValue = val => val != null ? val : ''

                const text = hasValue(itemText)
                const query = hasValue(queryText)

                return text.toString()
                    .toLowerCase()
                    .indexOf(query.toString().toLowerCase()) > -1
            },
            publish () {
                this.loading_publish = true;
                console.log(this.model);
                this.$store.dispatch('publishArticles',{
                    title:this.title,
                    body:this.body,
                    tags:this.model,
                    category:this.category,
                    excerpt:this.excerpt,
                    target: 0
                });
                this.$watch(this.$store.getters.getArticlesPublishStatus, function () {
                    if (this.$store.getters.getArticlesPublishStatus()  === 2) {
                        this.loading_publish = false
                        EventBus.$emit('open-message', {
                            text: ' 发布成功!',
                            type: 'success'
                        });
                        this.$store.dispatch('initArticlesPublishStatus');
                        this.$router.push('/index');
                    }
                    if (this.$store.getters.getArticlesPublishStatus()  === 3) {
                        this.loading_publish = false
                        EventBus.$emit('open-message', {
                            text: this.$store.getters.getArticlesPublishErrors,
                            type: 'error'
                        });
                        this.$store.dispatch('initArticlesPublishStatus');
                    }
                });
            },
            save () {
                this.loading_publish = true;
                this.$store.dispatch('publishArticles',{
                    title:this.title,
                    body:this.body,
                    tags:this.tags,
                    category:this.category,
                    excerpt:this.excerpt,
                    target: 1
                });
                this.$watch(this.$store.getters.getArticlesPublishStatus, function () {
                    if (this.$store.getters.getArticlesPublishStatus()  === 2) {
                        this.loading_publish = false
                        EventBus.$emit('open-message', {
                            text: ' 保存成功!',
                            type: 'success'
                        });
                        this.$store.dispatch('initArticlesPublishStatus');
                        this.$router.push('/index');
                    }
                    if (this.$store.getters.getArticlesPublishStatus()  === 3) {
                        this.loading_publish = false
                        EventBus.$emit('open-message', {
                            text: this.$store.getters.getArticlesPublishErrors,
                            type: 'error'
                        });
                    }
                });
            },
        },
        watch: {
            model (val, prev) {

                if(prev.length>=3) return

                if (val.length === prev.length) return

                this.model = val.map(v => {
                    if (typeof v === 'string') {
                        v = {
                            text: v,
                            color: this.colors[this.nonce - 1],
                        }

                        this.items.push(v)

                        this.nonce++
                    }

                    return v
                })
            },
        },
        created() {
            this.$store.dispatch('openOverlay');
            this.$watch(
                function () { // 第一个函数就是处理你要监听的属性，只要将其return出去就行
                    return this.$store.getters.getCategoriesLoadStatus();
                },
                function (old, valold) {
                    if(this.$store.getters.getCategoriesLoadStatus() == 2 ){
                        this.$nextTick(function(){
                            /*现在数据已经渲染完毕*/
                            this.$store.dispatch('closeOverlay');
                        })
                    }
                }
            )
            this.$store.dispatch('indexCategories');
        },
        computed:{
            categories(){
                return this.$store.getters.getCategories
            }
        }
    }
</script>
