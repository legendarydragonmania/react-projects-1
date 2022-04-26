const paginate = (follower) => {
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(follower.length / itemsPerPage)

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return follower.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

export default paginate
