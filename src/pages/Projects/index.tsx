import { Route, Routes } from 'react-router';
import { ProjectsPageDisplayComponent } from './ProjectsPageDisplayComponent';
import { ProjectsPageKiteSurfComponent } from './ProjectsPageDisplayProjectComponent';

const ProjectsPageKiteSurfDisplay = ProjectsPageKiteSurfComponent;

const ProjectsPage = () => {
	return (
		<Routes>
			<Route path=':slug' element={<ProjectsPageKiteSurfDisplay />} />
			<Route path='*' element={<ProjectsPageDisplayComponent />} />
		</Routes>
	);
};

export default ProjectsPage;
