import { Question } from '@/types';
import { ImageSize } from '@/types';

const checkUnrenderedImages = (
  imageSizes: ImageSize[],
  questionData?: Question
) => {
  let hasUnrenderedImages = false;
  if (questionData) {
    const imageAlternatives = questionData.alternatives[0].includes('https://');
    if (imageAlternatives)
      hasUnrenderedImages =
        imageSizes.length !== questionData.alternatives.length;
  }
  return hasUnrenderedImages;
};

export default checkUnrenderedImages;
