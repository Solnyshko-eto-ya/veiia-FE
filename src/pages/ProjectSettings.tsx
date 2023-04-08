import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MenuSettings } from '../components';
import Domains from './Domains';
import ProjectGeneralSettings from './ProjectGeneralSettings';

const CONTENT: Record<string, JSX.Element> = {
  'project-general-settings': <ProjectGeneralSettings />,
  domains: <Domains />,
};

const ProjectSettings = () => {
  const location = useLocation();

  console.log(location);
  const content = useMemo(() => {
    const menuItem = location.pathname.split('/').at(-1);
    if (typeof menuItem === 'string' && Object.keys(CONTENT).includes(menuItem)) {
      return CONTENT[menuItem];
    }
    return null;
  }, [location]);
  return (
    <PageContainer>
      <h2 style={{ fontSize: '40px', color: 'white', margin: ' 0' }}>Project Settings</h2>
      <hr />
      <SettingsContainer>
        <MenuSettings type="projectSettings" />
        {content}
      </SettingsContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 1250px;
  margin: 0 auto;
`;

const SettingsContainer = styled.div`
  --gap: 30px;

  display: grid;
  grid-template-columns: 250px calc(1000px - var(--gap));
  gap: var(--gap);
  margin: 0 auto;
  padding-bottom: 20px;
  border-radius: 10px;
`;

export default ProjectSettings;
