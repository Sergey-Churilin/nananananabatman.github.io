function getUrl(src) {
    return `https://newsapi.org/v2/top-headlines?` +
        `sources=${src}&` +
        `apiKey=ad6861683ef144d4bff3c2770a9841f2`;
}

class NewsService {
    static getNewsData(src) {
        let req = new Request(getUrl(src))

        return fetch(req)
            .then(response => response.json())
            .then(data => data.articles);
    }
}
