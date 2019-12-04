import Vue from 'vue'
import URL from './url'

export default ({ app }, inject) => {

    // 基础接口
    /*
    ** options: 接口数组
    ** cb_ok_array: 成功回调函数数组（数组下标对应接口数组下标）
    ** cb_ok: 成功总回调函数（每个接口对应的成功回调函数执行完毕后执行）
    ** cb_err_array: 失败回调函数数组（数组下标对应接口数组下标）
    */
    inject('admin_base', function(options, cb_ok_array, cb_ok, cb_err_array){
        this.$loadStart();
        let array = [];
        let error = false;
        this.$axiosAll(options).then(res => {
            for(let i=0; i<res.length; i++){
                if(res[i].code == 0){
                    cb_ok_array && cb_ok_array[i] && cb_ok_array[i](res[i]);
                }else{
                    this.$errorCode(res[i], cb_err_array && cb_err_array[i]); 
                }
            }
            cb_ok && cb_ok();
            this.$loadEnd();
        }, res => {
            this.$errorToast('系统出错，请稍后再试');
        })
    }),

    // 状态码管理
    inject('errorCode', function(res, cb_err){
        switch(parseInt(res.code)){
           
            default:
                this.$errorToast(res.msg);
                break;

        }
    })

}





