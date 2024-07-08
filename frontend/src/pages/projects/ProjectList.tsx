import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjectsByDomain } from '../../lib/api';
import './projectList.css';

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

interface ProjectListProps {
  selectedDomain: string | null;
}

const ProjectList: React.FC<ProjectListProps> = ({ selectedDomain }) => {
  const {
    data: projects = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['projects', selectedDomain],
    queryFn: () => {
      if (selectedDomain) {
        return getProjectsByDomain(selectedDomain);
      } else {
        return Promise.resolve([]);
      }
    },
    enabled: !!selectedDomain,
    onError: (err: any) => {
      console.error('Error loading projects:', err);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return <div>{(error as Error).message || 'Error loading projects'}</div>;

  const message =
    projects.length === 0? `We do not have projects in ${selectedDomain}. We will have more projects soon.`
      : '';

  return (
    <div className="project-list-container">
      {message && <div className="no-projects-message">{message}</div>}
      {projects.length > 0 ? (
        projects.map((project: Project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <b>Link:</b>{' '}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
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
              <b>Maintainers:</b> {project.maintainers.join(', ')}
            </p>
          </div>
        ))
      ) : (
        <div>No projects available</div>
      )}
    </div>
  );
};

export default ProjectList;
