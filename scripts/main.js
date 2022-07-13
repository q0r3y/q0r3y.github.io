let repoData = [];

async function getRepos() {
    const sortedRepos = await fetch(
        'https://api.github.com/users/q0r3y/repos?sort=updated&per_page=4', {
        method: 'GET'
    });
    await sortedRepos.json().then((data) => {
        repoData = data;
    });
}

function postRepos() {
    $latestWork = document.getElementsByClassName('repos')[0];
    repoData.forEach(element => {
        console.log(element);
        const $repoDiv = document.createElement('div');
        const $repoName = document.createElement('a');
        const $repoLang = document.createElement('p');
        const $repoDesc = document.createElement('p');
        const $repoUpdated = document.createElement('p');
        const lastPush = new Date(element.pushed_at).toLocaleDateString("en-US");
        $repoDiv.className = "repo";
        $repoName.className = "link";
        $repoName.href = element.html_url;
        $repoName.innerText = element.name;
        $repoLang.innerText = element.language;
        $repoDesc.innerText = element.description;
        $repoUpdated.innerText = `Updated: ${lastPush}`;
        $repoDiv.appendChild($repoName);
        $repoDiv.appendChild($repoLang);
        $repoDiv.appendChild($repoDesc);
        $repoDiv.appendChild($repoUpdated);
        $latestWork.appendChild($repoDiv);
    });
}

async function main() {
    await getRepos().then(postRepos);
}