
const NoResultsDiv = () => {
  return (
    <div className="no-results">
        <img src="icons/no-result.svg" alt="" className="icon" />
        <h3 className="title">Something went wrong</h3>
        <p className="message">
            Unable to get weather details.Ensure you've entered a valid city or try again.
        </p>
    </div>
  )
}

export default NoResultsDiv