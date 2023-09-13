// Next
import Link from 'next/link'

const GitHubRepos = async () => {
	const repositories = await getRepositories()

	return (
		<div>
			<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
				{repositories
					.filter((repo: any) => repo.language)
					.map((repo: any) => (
						<Link
							key={repo.id}
							href={repo.html_url}
							target='_blank'
							rel='noopener noreferrer'
						>
							<div className='p-2 pl-4 transition-all border rounded dark:border-zinc-700 hover:scale-105 hover:shadow-lg'>
								<p className='font-medium'>{repo.name}</p>
								<p className='text-xs text-zinc-500'>{repo.full_name}</p>
								<p className='my-1 text-sm text-zinc-600 dark:text-zinc-300'>
									{repo.description}
								</p>
								<p className='ml-auto px-2 py-0.5 text-xs font-medium border rounded bg-zinc-100 border-sky-300 w-fit bg-gradient-to-r from-sky-200 to-emerald-200 text-sky-900'>
									{repo.language}
								</p>
							</div>
						</Link>
					))}
			</div>
		</div>
	)
}

async function getRepositories() {
	const response = await fetch(
		'https://api.github.com/users/brandonrbridges/repos',
		{
			cache: 'reload',
		}
	)

	const repositories = await response.json()

	return repositories
}

export default GitHubRepos
