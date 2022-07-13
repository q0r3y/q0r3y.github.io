let repoData = [];

async function getRepos() {
    const sortedRepos = await fetch(
        'https://api.github.com/users/q0r3y/repos?sort=updated', {
        method: 'GET'
    });
    await sortedRepos.json().then((data) => {
        repoData = data;
    });
}

function postRepos() {
    $latestWork = document.getElementById('repos');
    repoData.forEach(element => {
        console.log(element);
        lastPush = new Date(element.pushed_at);
        const $repoA = document.createElement('a');
        const $repoP = document.createElement('p');
        $repoA.innerText += lastPush.toLocaleDateString("en-US");
        $repoA.innerText += element.html_url;
        $repoP.appendChild($repoA);
        $latestWork.appendChild($repoP);
    });
}

async function main() {
    await getRepos().then(postRepos);
}