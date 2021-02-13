<template >
    <svg width='100%' :height='height' @mousemove='listener($event)'>
        <a v-for='tag in tags'>
            <text :fill="tag.color" :x='tag.x' :y='tag.y' :font-size='15 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
        </a>
    </svg>
</template>
<script>
    export default {
        name: 'TagCloud',

        data: () => ({
            width:300,
            height:300,
            tagsNum:40,
            RADIUS:200,
            speedX:Math.PI/360,
            speedY:Math.PI/360,
            tags:[]
        }),computed:{
            // tags(){
            //     return this.$store.getters.getTags
            // },
            CX(){
                return this.width/2;
            },
            CY(){
                return this.height/2;
            }
        },
        created(){//初始化标签位置
            this.$store.dispatch('indexTags');
            let tags=[];
            for(let i = 0; i < this.tagsNum; i++){
                let tag = {};
                let k = -1 + (2 * (i + 1) - 1) / this.tagsNum;
                let a = Math.acos(k);
                let b = a * Math.sqrt(this.tagsNum * Math.PI)
                tag.text = i + 'tag';
                tag.x = this.CX +  this.RADIUS * Math.sin(a) * Math.cos(b);
                tag.y = this.CY +  this.RADIUS * Math.sin(a) * Math.sin(b);
                tag.z = this.RADIUS * Math.cos(a);
                tag.href = 'https://imgss.github.io'
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var c = Math.floor(Math.random() * 256);
                tags.color = "rgb(" + r + ',' + g + ',' + b + ")";
                tags.push(tag)
            }
            this.tags = tags;
            this.$watch(
                function () { // 第一个函数就是处理你要监听的属性，只要将其return出去就行
                    return this.$store.getters.getTagsLoadStatus();
                },
                function (old, valold) {
                    if(this.$store.getters.getArticlesLoadStatus() == 2){
                        let temp = this.$store.getters.getTags;
                        for(let i = 0; i < this.tagsNum; i++){
                            if(temp[i]){
                                tags[i].text = temp[i].name;
                                tags[i].color = temp[i].color;
                            }
                        }
                    }
                }
            )
        },
        mounted(){//使球开始旋转
            setInterval(()=>{
                this.rotateX(this.speedX);
                this.rotateY(this.speedY);
            }, 17)
        },
        methods:{
            rotateX(speedX){
                var cos = Math.cos(speedX);
                var sin = Math.sin(speedX);
                for(let tag of this.tags){
                    var y1 = (tag.y- this.CY) * cos - tag.z * sin  + this.CY;
                    var z1 = tag.z * cos + (tag.y- this.CY) * sin;
                    tag.y = y1;
                    tag.z = z1;
                }
            },
            rotateY(speedY){
                var cos = Math.cos(speedY);
                var sin = Math.sin(speedY);
                for(let tag of this.tags){
                    var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
                    var z1 = tag.z * cos + (tag.x - this.CX) * sin;
                    tag.x = x1;
                    tag.z = z1;
                }
            },
            listener(event){//响应鼠标移动
                var x = event.clientX - this.CX;
                var y = event.clientY - this.CY;
                this.speedX = x*0.0001>0 ? Math.min(this.RADIUS*0.00002, x*0.0001) : Math.max(-this.RADIUS*0.00002, x*0.0001);
                this.speedY = y*0.0001>0 ? Math.min(this.RADIUS*0.00002, y*0.0001) : Math.max(-this.RADIUS*0.00002, y*0.0001);
            }
        }
    }
</script>
