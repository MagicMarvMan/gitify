function createGist(description1, filename1, content1, public1=false) {
    $.ajax({
        method:"post",
        url:"https://api.github.com/gists",
        data:{
            description:description1,
            public:public1,
            files:{filename1:{content:content1}}
        }
    }).done(function(resp) {
        console.log(resp);
    });
}
