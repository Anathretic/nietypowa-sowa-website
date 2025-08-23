import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const TopicSelectContext = createContext(null);

const TopicSelectProvider = ({ children }) => {
	const [selectedTopic, setSelectedTopic] = useState('');
	const location = useLocation();

	useEffect(() => {
		const topicFromURL = new URLSearchParams(location.search).get('topic');

		if (topicFromURL) {
			setSelectedTopic(topicFromURL);
		}
	}, [location.search]);

	return (
		<TopicSelectContext.Provider value={{ selectedTopic, setSelectedTopic }}>{children}</TopicSelectContext.Provider>
	);
};

export default TopicSelectProvider;
