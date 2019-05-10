<template>
    <div>
        <h1>这是 APP 组件</h1>
        <!-- 为什么可以直接用mt-button？ -->
        <mt-button type="danger" icon="more" @click="show">default</mt-button>

        <mt-button type="danger" size="large" plain>default</mt-button>

        <mt-button type="danger" size="small" disabled>default</mt-button>

        <!-- <mybtn icon="more">123456</mybtn> -->

        <button type="button" class="mui-btn mui-btn-royal">
					紫色
		</button>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
// 导入toast组件
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            toastInstance:null,
        };
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
        //模拟获取列表的一个AJAX方法
        // 在获取数据之前，立即弹出toast提示用户，正在加载数据
        this.show();
            setTimeout(() => {
                // 当3秒过后，数据获取回来了，要把toast移除
                this.toastInstance.close();
            }, 3000);
        },
        show(){
           this. toastInstance= Toast({
                message:'这是消息',
                duration:-1,//如果是-1 则弹出来之后不消失
                position:'top',
                iconClass:"glyphicon glyphicon-heart",//设置 图标的类
                className:'mytoast'//自定义toast的样式，需要自己提供一个类名
            })
        }
    }
}
</script>

<style lang="">
    
</style>