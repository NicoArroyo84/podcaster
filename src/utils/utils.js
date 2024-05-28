const formatTime = (milliseconds) =>  {
	const totalSeconds = Math.floor(milliseconds / 1000);
	const totalMinutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) {
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

const formatDate = (date) => new Date(Date.parse(date)).toLocaleDateString();


const formatDescription = description => {
  const urlRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]|(\b[\w.-]*\.(com|net|fm)\b[\w/-]*))/gi;

  const htmlDescription = description.replace(urlRegex, url => {
    const href = url.startsWith('http') ? url : `http://${url}`;
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-blue-700">${url}</a>`;
  });

  return htmlDescription
    .split(/\\n\\n|\\n|\n/)
    .map(paragraph => `<p class="mb-2">${paragraph}</p>`)
    .join('');
};

export default { formatTime, formatDate, formatDescription };