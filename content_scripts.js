chrome.extension.onMessage.addListener(request => {
    if (request == "windowAction") {
        const scripts = document.querySelectorAll('script');
        const articleId = [...scripts].find(v => v.innerHTML.match(/wgArticleId.*?(\d+)/)).innerHTML.match(/wgArticleId.*?(\d+)/)[1];
        const url = `${location.protocol}//${location.hostname}/?curid=${articleId}`;
        navigator.clipboard.writeText(url);
    }
}); 