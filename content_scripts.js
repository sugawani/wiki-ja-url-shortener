chrome.extension.onMessage.addListener(request => {
    if (request == "windowAction") {
        const scripts = document.querySelectorAll('script');
        let articleId;
        scripts.forEach(v => {
            const scriptArticle = v.innerHTML.match(/wgArticleId.*?(\d+)/);
            if (scriptArticle) {
                articleId = scriptArticle[1];
            }
        })
        const url = `${location.protocol}//${location.hostname}/?curid=${articleId}`;
        navigator.clipboard.writeText(url);
    }
}); 