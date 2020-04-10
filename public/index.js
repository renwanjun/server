

console.log('load1')
setTimeout(function(){
    console.log(12)
},100)
window.onload = function (window) {
    console.log('loaded',document.readyState)
    // 表单 操作模拟
    var form=docxument.forms[0]
    
    // 提交事件
    form.addEventListener('submit',function(event){
        event=event||window.event
        form['submit'].disabled=true
        var formData=new FormData(this)

        event.preventDefault()
        console.log(formData)
        sendFormData(formData,'./')
    })
    form.elements["name"].addEventListener('focus',function(event){
        this.select()
    })
    form.elements["resume"].addEventListener('change',function(event){
        // console.log(this==event.target)
        console.log(this.value)
        var files=this.files,i=0;len=files.length
        while(i<len){
            let file=files[i]
            console.log(file.name+":"+file.type+':'+file.size)
            i++
        }
    })
    form.elements["name"].focus() // 获得焦点
    // 表单序列化
    function formStringfy(){

    }

    function sendFormData(data,url){
        var xhr=new XMLHttpRequest()
        xhr.onreadystatechange=function(){
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    console.log(xhr.responseText)
                } else {
                    console.log("Request was unsuccessful:" + xhr.status)
                }
            }
        }
        xhr.open('post',url,true)
        xhr.send(data)
    }
       

    /**
     * cros 跨域请求资源
     */
    var xhr = new XMLHttpRequest();
    // xhr.readyState变化
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                console.log(xhr.responseText)
            } else {
                console.log("Request was unsuccessful:" + xhr.status)
            }
        }
    }
    xhr.onload = function () {
        console.log(xhr == this)
    }
    xhr.open('get', './src/a.txt', true) // 异步发送请求
    xhr.send(null)
}