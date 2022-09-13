const GET_LEADERBOARD_URL = 'https://hello-world-demo-api.herokuapp.com/api/leaderboard'
const POST_SCORE_URL = 'https://hello-world-demo-api.herokuapp.com/api/'

export async function getLeaderBoard() {
    const res = await fetch(GET_LEADERBOARD_URL)
    return res.data;
}

export async function sendScore(name, score) {
    const res = await fetch(POST_SCORE_URL, {
        method: 'POST',
        body: JSON.stringify(
            {
                name: name,
                score: score
            }
        )
    })
}