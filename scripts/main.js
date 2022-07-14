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

const setColor = function (language) {
    if (language === "C++") {
        return "#d3869b"
    } else if (language === "JavaScript") {
        return "#fabd2f"
    } else if (language === "C#") {
        return "#b8bb26"
    } else if (language === "Python") {
        return "#83a598"
    } else if (language === "PowerShell") {
        return "#83a598"
    } else if (language === "Java") {
        return "#d79921"
    } else {
        return "#8ec07c"
    }
}

function postRepos() {
    $latestWork = document.getElementById('repos');
    repoData.forEach(element => {
        console.log(element);

        const $repoDiv = document.createElement('div');
        const $repoName = document.createElement('a');
        const $repoUpdated = document.createElement('p');
        const $repoLang = document.createElement('p');
        const $repoDesc = document.createElement('p');
        const lastPush = new Date(element.pushed_at).toLocaleDateString("en-US");

        $repoDiv.classList.add("repo");
        $repoName.classList.add("link");
        $repoDesc.classList.add("repoDesc");
        $repoUpdated.classList.add("repoUpdated");
        $repoLang.classList.add("repoLang");

        $repoName.href = element.html_url;
        $repoName.innerText = element.name;
        $repoUpdated.innerText = `Updated: ${lastPush}`;
        $repoLang.innerText = element.language;
        $repoLang.style.color = setColor(element.language);
        $repoDesc.innerText = element.description;

        $repoDiv.appendChild($repoName);
        $repoDiv.appendChild($repoUpdated);
        $repoDiv.appendChild($repoLang);
        $repoDiv.appendChild($repoDesc);
        $latestWork.appendChild($repoDiv);
    });
}

async function main() {
    await getRepos().then(postRepos);
}