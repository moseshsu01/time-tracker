import './Components.css';

export const EntryDisplay = ({ hours, description }) => {
  return (
    <div className='entry-display'>
      <div className='entry-hours-container'>
        <div className='entry-hours-label'>Hours:</div>
        <div>{hours}</div>
      </div>
      <div className='entry-description-label'>Description</div>
      <div className='entry-description'>{description}</div>
    </div>
  );
};
