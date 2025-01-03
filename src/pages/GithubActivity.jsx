import GitHubCalendar from 'react-github-calendar';

const GithubGraph = () => {
    return (
        <div className='font-poppins text-center flex flex-col justify-center bg-slate-100 pt-20 items-center'>
            <h1 className='text-5xl text-purple-700 font-extrabold mb-3'>Github Activity</h1>
            <p className='text-black mb-6 max-w-[650px]'>
            This calendar shows my GitHub contributions over time. Darker colors represent more activity, giving an overview of my coding journey.
            </p>
            <GitHubCalendar username="siddiqfathurahman" />
        </div>
    )
}

export default GithubGraph;