chrome.extension.onMessage.addListener(request => {
    if (request == "windowAction") {
        const scripts = document.querySelectorAll('script');
        let articleId;
        scripts.forEach(v => {
            // TODO: うまく取れてない気がする
            const articleId = v.innerHTML.match(/wgArticleId.*?(\d+)/);
            console.log(articleId);
            if (articleId) {
                this.articleId = articleId;
            }
        })
        console.log(articleId);
    }
}); 