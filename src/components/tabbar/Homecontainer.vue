<template>
    <div>
        <mt-swipe :auto="1000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <h3>这是home</h3>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    created(){
        this.getSwipe()
    },
    methods:{
        getSwipe(){
            this.$http.get('http://vue.lovegf.cn:8899/api/getlunbo').then(result => {

                console.log(result.body);
                
            })
        }
    }
}
</script>

<style lang="less" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
      &:nth-child(1) {background-color: aqua;}
      &:nth-child(2) {background-color: red;}
      &:nth-child(3) {background-color: blue;}
    }
}
</style>
