'use strict';

(function () {


    const GITHUB_API_BASEURL = 'https://api.github.com';
    window.addEventListener('load', init);
    let submitButton = id("submit-btn");

    function init() {
        getUserRepos();
        submitButton.addEventListener("click", changeUserName);
    }

    /**
     * Each entry should include the repository name, description, creation date, update date number of commits, list of languages, and the number of watchers. There should also be a hyperlink that will take you directly to the repository on GitHub.
     * 
     * Repo Name x
     * Description x
     * Create Date x
     * Update Date x
     * # of Commits 
     * List of Languages x
     * # of watchers x
     * Hyperlink to page x
     */

    let gitHubUsername = 'annicamclean';
    let url = 'https://api.github.com/users/annicamclean/repos?sort=created';

    /*Function to fetch the repos and commits*/
    function getUserRepos() {
        let url2 = "";
        let fetch2Array = [];
        let tileArray = [];
        let div = id('container');
        //fetches the repo information and is added to an arrays and objects
        const fetch1 = fetch(url)
            .then(checkStatus)
            .then((repoData) => {

                console.log(repoData);

                while (div.hasChildNodes()) {
                    div.removeChild(div.lastChild);
                }

                for (const item of repoData) {
                    let tile = {
                        name: "",
                        descrip: "",
                        createDate: "",
                        uDate: "",
                        commits: "",
                        listOfLangs: "",
                        numOfWatchers: "",
                        hyperlink: ""
                    };

                    const name = item['name'];
                    tile.name = name;

                    url2 = GITHUB_API_BASEURL + '/repos/' + gitHubUsername + '/' + name + '/commits';
                    fetch2Array.push(url2);

                    const desc = item['description'];
                    if (!desc) {
                        tile.descrip = "No description";
                    } else {
                        tile.descrip = desc;
                    }

                    const date = item['created_at'];
                    tile.createDate = 'Created: ' + date;

                    const updated = item['updated_at'];
                    tile.uDate = 'Updated: ' + updated;

                    const watchersCount = item['watchers_count'];
                    tile.numOfWatchers = 'Watchers: ' + watchersCount;

                    const languageList = item['language'];
                    tile.listOfLangs = 'Language(s): ' + languageList;

                    const link = item['html_url'];
                    tile.hyperlink = link;

                    tileArray.push(tile);
                }
            })
            .then(() => {
                //fetches the amount of commits made
                for (let i = 0; i < fetch2Array.length; i++) {
                    url2 = fetch2Array[i];
                    let numOfCommits2 = "";
                    fetch(url2)
                        .then(checkStatus)
                        .then((commitData) => {
                            let commitNum = 0;
                            for (const commit of commitData) {
                                if (commit['node_id']) {
                                    commitNum++;
                                }
                            }
                            numOfCommits2 = 'Commits: ' + commitNum;
                            let newTile = tileArray[i];
                            newTile.commits = numOfCommits2;
                        })
                        .then(() => {
                            //creates the tiles for the site
                            let block = document.createElement('div');
                            block.classList.add('tile');

                            let topPart = document.createElement('div');
                            topPart.classList.add('top-part');

                            let div20 = document.createElement('div');
                            div20.classList.add('div-20');

                            let div80 = document.createElement('div');
                            div80.classList.add('div-80');

                            let newTile = tileArray[i];

                            let image = document.createElement('img');
                            image.src = './images/github-logo.png';
                            div20.appendChild(image);

                            topPart.appendChild(div20);
                            let repoName = document.createElement('h2');
                            repoName.innerHTML = newTile.name;
                            div80.appendChild(repoName);
                            topPart.appendChild(div80);


                            block.appendChild(topPart);

                            let repoDesc = document.createElement('p');
                            repoDesc.innerHTML = newTile.descrip;
                            block.appendChild(repoDesc);

                            let repoDate = document.createElement('p');
                            repoDate.innerHTML = newTile.createDate;
                            block.appendChild(repoDate);

                            let updateDate = document.createElement('p');
                            updateDate.innerHTML = newTile.uDate;
                            block.appendChild(updateDate);

                            let commits = document.createElement('p');
                            commits.innerHTML = newTile.commits;
                            block.appendChild(commits);

                            let languages = document.createElement('p');
                            languages.innerHTML = newTile.listOfLangs;
                            block.appendChild(languages);

                            let watcher = document.createElement('p');
                            watcher.innerHTML = newTile.numOfWatchers;
                            block.appendChild(watcher);

                            let a = document.createElement('a');
                            let linkText = document.createTextNode("Link to Repo");
                            a.appendChild(linkText);
                            a.title = "Repo URL";
                            a.href = newTile.hyperlink;

                            let bottomDiv = document.createElement('div');
                            bottomDiv.classList.add('bottom-div');

                            bottomDiv.appendChild(a);
                            block.appendChild(bottomDiv);
                            div.appendChild(block);

                        })
                        .catch((error) => {
                            console.error('Error: ', error);
                        });
                }
            })
            .catch((error) => {
                console.error('Error: ', error);
            });

    }


    function changeUserName() {
        gitHubUsername = document.querySelector("#user-name").value;
        url = GITHUB_API_BASEURL + "/users/" + gitHubUsername + '/repos?sort=created';
        let title = id('title');
        title.innerHTML = 'Github Gallery: ' + gitHubUsername;
        getUserRepos();
    }



    //helper functions
    function id(idName) {
        return document.getElementById(idName);
    }
    function checkStatus(response) {
        if (!response.ok) {
            throw Error('Error in request: ' + response.statusText);
        }
        return response.json();
    }
})();