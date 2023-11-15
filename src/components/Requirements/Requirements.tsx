import React from 'react';
import bg4 from '../../assets/images/bg-4.webp';
import {SectionDescription, SectionTitle} from '../../App.styled';
import {
    RequirementsBg,
    RequirementsContainer,
    RequirementsHeading,
    RequirementsSectionBg,
    RequirementsSectionContent
} from './Requirements.styled';
import RequirementItem from './RequirementItem';

const RequirementsSection = () => {
    return (
        <RequirementsBg $backgroundImage={bg4}>
            <RequirementsSectionBg/>
            <RequirementsHeading>
                <SectionDescription $center={true} style={{marginBottom: '1rem'}}>Can My Computer Run this
                    game?</SectionDescription>
                <SectionTitle $center={true} style={{marginBottom: '1.5rem'}}>system requirements</SectionTitle>
            </RequirementsHeading>

            <RequirementsContainer>
                <RequirementsSectionContent>
                    <RequirementItem heading={'OS:'} body={'Windows 7 64-bit only (No OSX support at this time)'}/>
                    <RequirementItem heading={'PROCESSOR:'}
                                     body={`Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ`}/>
                    <RequirementItem heading={'MEMORY:'} body={'8 GB RAM'}/>
                    <RequirementItem heading={'storage:'} body={'8 GB available space'}/>
                    <RequirementItem heading={'GRAPHICS:'}
                                     body={`NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)`} isLast={true}/>
                </RequirementsSectionContent>
                {/*<EmptyPlace/>*/}

            </RequirementsContainer>

        </RequirementsBg>
    );
};

export default RequirementsSection;
