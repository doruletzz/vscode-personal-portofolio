import { Route, Routes } from 'react-router';
import { ProjectsPageDorletzComponent } from './ProjectsPageDorletzComponent';

const ProjectsPageDorletzDisplay = ProjectsPageDorletzComponent;

const ProjectsPage = () => {
	return (
		<Routes>
			<Route path='dorletz' element={<ProjectsPageDorletzDisplay />} />
			<Route path='*' element={<div>"aaa"</div>} />
		</Routes>
	);
};

export default ProjectsPage;
