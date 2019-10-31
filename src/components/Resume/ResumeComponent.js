import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Experience from './Experience'
import Education from './Education'
import Title from '../Globals/Title'
import Subtitle from '../Globals/Subtitle'

const getResume = graphql`
{
  experience: allContentfulResume(sort:{fields:createdAt, order: DESC}) {
    edges {
      node {
        contentful_id
        position
        date
        company
        description {
          json
        }
      }
    }
  }
  education: allContentfulEducation(sort: {fields:createdAt, order: ASC}) {
    edges {
      node {
        contentful_id
        school
        date
        course
        description {
          description
        }
      }
    }
  }
}
`

const Resume = () => {
  const response = useStaticQuery(getResume);
  const experiences = response.experience.edges;
  const educations = response.education.edges;
  return (
    <div className="page section-resume">
      <div className="container">
        <Title className="resumeHeading" title="Resume" />
        <div className="row">
          <div className="col-12">
            <Subtitle title="Experience" />
            <ul className="experience timeline">
              {
                experiences.map(({ node }) => {
                  return (
                    <Experience key={node.contentful_id} exp={node} />
                  )
                })
              }
            </ul>
          </div>
          <div className="col-12">
            <Subtitle title="Education" />
            <ul className="education timeline">
              {
                educations.map(({ node }) => {
                  return (
                    <Education key={node.contentful_id} edu={node} />
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
