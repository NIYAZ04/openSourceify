import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserForProfileProject, getProjectsByUser } from '../../lib/api';
import './profileProjects.css';

interface Project {
  id: string;
  name: string;
  link: string;
  willPay: boolean;
  license: string;
  domain: string;
  languages: string;
  description: string;
  maintainers: string[];
}

const ProfileProjects: React.FC = () => {
  // Fetch the user data to get user ID
  const { data: user, isLoading: userLoading, isError: userError } = useQuery({
    queryKey: ['user'],
    queryFn: getUserForProfileProject,
  });

  // Fetch the projects for the user using the user ID
  const userId = user?._id;
  const {
    data: projects = [],
    isLoading: projectsLoading,
    isError: projectsError,
    error: projectsErrorDetail,
  } = useQuery({
    queryKey: ['projects', userId],
    queryFn: () => (userId ? getProjectsByUser(userId) : Promise.resolve([])),
    enabled: !!userId, // Fetch only if userId exists
  });

  if (userLoading || projectsLoading) {
    return <div>Loading projects...</div>;
  }

  if (userError || projectsError) {
    return <div>{(projectsErrorDetail as Error).message || 'Failed to load projects'}</div>;
  }

  return (
    <div className="ProfileProjects-container">
      <h3 className="ProfileProjects-heading">My Projects</h3>
      {projects.length === 0 ? (
        <div>No projects found</div>
      ) : (
        <ul className="ProfileProjects-list">
          {projects.map((project: Project) => (
            <li key={project.id} className="ProfileProjects-item">
              <h4>{project.name}</h4>
              <p>
                <b>Link:</b> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
              </p>
              <p>
                <b>Will Pay:</b> {project.willPay ? 'Yes' : 'No'}
              </p>
              <p>
                <b>License:</b> {project.license}
              </p>
              <p>
                <b>Domain:</b> {project.domain}
              </p>
              <p>
                <b>Languages:</b> {project.languages}
              </p>
              <p>
                <b>Description:</b> <span className="project-description">{project.description}</span>
              </p>
              <p>
                <b>Maintainers:</b> {project.maintainers.join(', ')}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileProjects;
