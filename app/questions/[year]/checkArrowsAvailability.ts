const checkArrowsAvailability = (question: string) => {
  const questionNumber = parseInt(question);
  const leftArrowEnabled = questionNumber > 1;
  const rightArrowEnabled = questionNumber < 180;

  return { leftArrowEnabled, rightArrowEnabled };
};
export default checkArrowsAvailability;
