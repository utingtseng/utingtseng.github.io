import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import experienceList from './experienceList';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';


const ExperienceCards = () => {
    const [seeOthers, setSeeOthers] =  useState(false);

    return (
      <>
      <Row>
        <Col><Form.Check checked={seeOthers} type="switch" label="See other skills" onChange={() => setSeeOthers(!seeOthers)}/></Col>
      </Row>
      <Row xs={1} sm={1} md={2} lg={2} xl={3} className="g-4">
        {experienceList.map((item) => {
          return (
            <Col key={`cardCol-${item.id}`} className='d-flex justify-content-center'>
              <Card style={{ backgroundColor: `#${item.color}`}} >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>
                    <h3>{item.institution}</h3>
                  </Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <div>
                    <h5>Skills</h5>
                  {item.skills.map((skill, idx) => {
                    return (
                      <SkillButton key={`skillButton-${idx}`} skill={skill} idx={idx}/>
                    )
                  })}
                  </div>
                  {seeOthers?
                  <div>
                    <h5>Other skills</h5>
                  {item.secondarySkills.map((skill, idx) => {
                    return (
                      <SkillButton key={`secSkillButton-${idx}`} skill={skill} idx={idx}/>
                    )
                  })}
                  </div> : null}
                </Card.Body>
              </Card>
            </Col>)
        })}
      </Row>
      </>
    )
}


export default ExperienceCards;


const SkillButton = ({idx, skill}) => {
  const [selected, setSelected] = useState(false);
  const addToGoodSkills = () => {
    // if (selected) {
    //   total_likes -= 1;
    // } else {
    //   total_likes += 1;
    // }
    setSelected(!selected);
  }

  return (
    <>
      <Button
        key={idx}
        variant={selected? "success": "outline-success"}
        onClick={addToGoodSkills}
        size="sm"
      >
        {skill}
      </Button>{' '}
    </>
  )
}
