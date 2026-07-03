import data from '../data/techStack.json';

export const getTechByCategory = (category) => {
    return data.techStack.filter(item => item.category === category);
};