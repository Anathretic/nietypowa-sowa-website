import { createContext, useState } from 'react';

export const TopicSelectContext = createContext(null);

const TopicSelectProvider = ({ children }) => {
	const [selectedTopic, setSelectedTopic] = useState('');
	return (
		<TopicSelectContext.Provider value={{ selectedTopic, setSelectedTopic }}>{children}</TopicSelectContext.Provider>
	);
};

export default TopicSelectProvider;
