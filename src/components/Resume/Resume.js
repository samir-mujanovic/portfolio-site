import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Experience from './Experience'
import Education from './Education'

const getResume = graphql`
{
  experience: allContentfulResume(sort:{fields:id}) {
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
  education: allContentfulEducation(sort: {fields: id}) {
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
                <div className="row">
                    <div className="col-12">
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
