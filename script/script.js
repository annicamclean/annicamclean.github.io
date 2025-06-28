'use strict';

(function () {

    const GITHUB_API_BASEURL = 'https://api.github.com';
    const GITHUB_TOKEN = ''; // <-- Replace with your token

    window.addEventListener('load', init);

    function init() {
        getUserRepos();
    }

    let gitHubUsername = 'annicamclean';

    function getUserRepos() {
        let url2 = "";
        let fetch2Array = [];
        let tileArray = [];
        let latestProject = {
            updated: "",
            name: ""
        };
        let div = id('container');
        console.log(div);
        if (div) {
            //fetches the repo information and is added to an arrays and objects
            //https://api.github.com/users/annicamclean/repos?sort=created
            const fetch1 = fetch(GITHUB_API_BASEURL + '/users/' + gitHubUsername + '/repos?sort=created', {
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN}`
                    }
                })
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

                        if (latestProject.updated < updated) {
                            latestProject.updated = updated;
                            latestProject.name = name;
                        }

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
                                if (div) {
                                    let block = document.createElement('div');
                                    block.classList.add('tile');

                                    let topPart = document.createElement('div');
                                    topPart.classList.add('top-part');

                                    let div20 = document.createElement('div');
                                    div20.classList.add('div-20');

                                    let div80 = document.createElement('div');
                                    div80.classList.add('div-80');

                                    let newTile = tileArray[i];

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
                                    if (div != null) {
                                        div.appendChild(block);
                                    }
                                }
                            })
                            .catch((error) => {
                                console.error('Error: ', error);
                            });
                    }

                    let latest = id("latest-project");
                    if (latest != null) {
                        latest.innerHTML = `Latest Project: ${latestProject.name}`;
                    }
                })
                .catch((error) => {
                    console.error('Error: ', error);
                });

        }


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

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// --- Homepage dynamic project info ---
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
    fetch('https://api.github.com/users/annicamclean/repos', {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`
            }
        })
        .then(res => res.json())
        .then(repos => {
            if (!Array.isArray(repos) || repos.length === 0) throw new Error('No repos found');
            // Exclude portfolio repo
            repos = repos.filter(r => r.name !== 'annicamclean.github.io');
            // Find latest updated project
            let latest = repos.reduce((a, b) => new Date(a.updated_at) > new Date(b.updated_at) ? a : b);
            // Find project with most lines (size field)
            let mostLines = repos.reduce((a, b) => (b.size > a.size ? b : a), repos[0]);
            let fallback = repos[0];
            // Update latest project
            const latestEl = document.getElementById('latest-project');
            if (latestEl) {
                latestEl.innerHTML = `Latest Project: <a href="${latest.html_url}" target="_blank">${latest.name}</a>`;
            }
            // Update featured project with more info
            const card = document.getElementById('featured-project-card');
            const repoToShow = mostLines || fallback;
            if (card && repoToShow) {
                card.innerHTML = `
                    <img src='https://opengraph.githubassets.com/1/${repoToShow.full_name}' alt='${repoToShow.name}' style='width:100%;max-width:400px;border-radius:16px;margin-bottom:1rem;'>
                    <h3>${repoToShow.name}</h3>
                    <p>${repoToShow.description || 'No description provided.'}</p>
                    <div class='project-links'>
                        <a href='${repoToShow.html_url}' class='btn' target='_blank'>View Code</a>
                        ${repoToShow.homepage ? `<a href='${repoToShow.homepage}' class='btn' target='_blank'>Live Demo</a>` : ''}
                    </div>
                    <div class='featured-meta'>
                        <span><b>Languages:</b> ${repoToShow.language || 'N/A'}</span> |
                        <span><b>Stars:</b> ${repoToShow.stargazers_count}</span> |
                        <span><b>Forks:</b> ${repoToShow.forks_count}</span> |
                        <span><b>Last Updated:</b> ${repoToShow.updated_at.slice(0, 10)}</span> |
                        <span><b>Total lines (approx):</b> ${repoToShow.size}</span>
                    </div>
                `;
            } else if (card) {
                card.innerHTML = '<p>No featured project found.</p>';
            }
        })
        .catch(() => {
            const latestEl = document.getElementById('latest-project');
            if (latestEl) latestEl.innerHTML = 'Latest Project: <span style="color:#e53935">Could not load project.</span>';
            const card = document.getElementById('featured-project-card');
            if (card) card.innerHTML = '<p>Could not load featured project.</p>';
        });
}

// Inject navigation
function injectNav() {
    fetch('./nav.html')
        .then(res => res.text())
        .then(html => {
            const header = document.querySelector('header');
            if (header) {
                header.innerHTML = html;
                // Highlight current page
                const links = header.querySelectorAll('.nav-link');
                const path = window.location.pathname.split('/').pop();
                links.forEach(link => {
                    const href = link.getAttribute('href');
                    if ((path === '' && href === './index.html') || path === href.replace('./', '')) {
                        link.classList.add('active');
                    }
                });
            }
        });
}
document.addEventListener('DOMContentLoaded', injectNav);

// --- Robust GitHub repo rendering (Top 5 by commits) ---
if (document.getElementById('container') && document.getElementById('container').classList.contains('horizontal-repo-grid')) {
    const container = document.getElementById('container');
    if (container && container.children.length === 0) {
        fetch('/api/github-proxy?url=' + encodeURIComponent('https://api.github.com/users/annicamclean/repos?per_page=100'))
  .then(res => res.json())
  .then(data => {
    // ...use your data...
  });
    }
}

// --- Show contributed-to repos (not owned) on projects page ---
if (window.location.pathname.includes('projects.html')) {
    const grid = document.getElementById('contributions-grid');
    if (grid) {
        // Helper to fetch all pages of commit search results
        async function fetchAllContributedRepos(page = 1, repos = {}) {
            const res = await fetch(`https://api.github.com/search/commits?q=author:annicamclean&per_page=100&page=${page}`, {
                headers: { 'Accept': 'application/vnd.github.cloak-preview' }
            });
            const data = await res.json();
            if (!data.items) return repos;
            data.items.forEach(item => {
                const repo = item.repository;
                if (repo.owner.login !== 'annicamclean' && !repos[repo.full_name]) {
                    repos[repo.full_name] = repo;
                }
            });
            // If there are 100 results, there might be more pages
            if (data.items.length === 100) {
                return fetchAllContributedRepos(page + 1, repos);
            }
            return repos;
        }

        fetchAllContributedRepos().then(repos => {
            const repoList = Object.values(repos);
            if (repoList.length === 0) {
                grid.innerHTML = "<p>No public contributions to other repositories found.</p>";
                return;
            }
            repoList.forEach(repo => {
                const card = document.createElement('article');
                card.className = 'project-card tile';
                card.innerHTML = `
                    <h4>Contributed Repo</h4>
                    <h3>${repo.full_name}</h3>
                    <div class='project-links'>
                        <a href='${repo.html_url}' class='btn' target='_blank'>View Repo</a>
                    </div>
                `;
                grid.appendChild(card);
            });
        });
    }
}