import { Route, Routes } from 'react-router';
import { ProjectsPageDorletzComponent } from './ProjectsPageDorletzComponent';
import { ProjectsPageDisplayComponent } from './ProjectsPageDisplayComponent';

const ProjectsPageDorletzDisplay = ProjectsPageDorletzComponent;

const ProjectsPage = () => {
	return (
		<Routes>
			<Route path='dorletz' element={<ProjectsPageDorletzDisplay />} />
			<Route path='*' element={<ProjectsPageDisplayComponent />} />
		</Routes>
	);
};

export default ProjectsPage;
