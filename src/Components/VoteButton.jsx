import axios from 'axios';

const VoteButton = ({dogId, value}) => {
  const subId = "randomUser1"

  const onClickButton = async () => {
    try {
      const response = await axios.post("https://api.thedogapi.com/v1/votes", {
        image_id: dogId,
        sub_id: subId,
        value: value
      }, {
        headers: {
          "Content-Type": 'application/json',
          "x-api-key": 'live_4rGYISEvfuqFXkGte9Eg7EYoB2hqfqhRLY9fndfj9j7zkZlJWgHhfzSa9rgIruYP',
        }
      });
      console.log(response);
    } catch (error) {
      console.error("Error while downvoting:", error);
    }
  }

  return (
    <button onClick={onClickButton} className='vote-button'> {value === 0 ? '👎' : '👍'}</button>
  )
}

export default VoteButton;