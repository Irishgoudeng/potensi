import React, { useState, useEffect } from 'react';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import Select from 'react-select';
import { db } from '../../../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const JobScheduling = ({ formData, selectedWorkers, handleInputChange, handleWorkersChange, handleSubmit, jobId }) => {
  const [workers, setWorkers] = useState([]);

useEffect(() => {
    const fetchUsers = async () => {
        try {
            const usersCollection = collection(db, 'users');
            const usersSnapshot = await getDocs(usersCollection);
            const usersList = usersSnapshot.docs.map(doc => ({
                value: doc.id,
                label: doc.data().workerId +' - '+ doc.data().firstName + ' ' + doc.data().lastName, 
            }));
            setWorkers(usersList);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    fetchUsers();
}, []);

  const assignedWorkersOptions = workers.filter(worker =>
    formData.assignedWorkers?.includes(worker.value)
  );

  return (
    <Form>
      <Row className='mb-3'>
        <Col xs="auto">
          <Form.Group as={Col} controlId="jobNo">
            <Form.Label>Job No.</Form.Label>
            <Form.Control type="text" value={jobId} readOnly style={{ width: '95px' }} />
          </Form.Group>
        </Col>
        <Form.Group as={Col} controlId="jobName">
          <Form.Label>Job Name</Form.Label>
          <Form.Control
            type="text"
            name="jobName"
            value={formData.jobName}
            onChange={handleInputChange}
            placeholder="Enter Job Name"
          />
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={3}
            placeholder="Enter job description"
          />
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md="4" controlId="jobPriority">
          <Form.Label>Job Priority</Form.Label>
          <Form.Select
            name="jobPriority"
            value={formData.jobPriority}
            onChange={handleInputChange}
            aria-label="Select job category"
          >
            <option value="" disabled>Select Priority</option>
            <option value="L">Low</option>
            <option value="M">Mid</option>
            <option value="H">High</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="jobStatus">
          <Form.Label>Job Status</Form.Label>
          <Form.Select 
            name="jobStatus"
            value={formData.jobStatus}
            onChange={handleInputChange}
            aria-label="Select job status"
          >
            <option value="" disabled>Select Status</option>
            <option value="C">Created</option>
            <option value="CO">Confirm</option>
            <option value="CA">Cancel</option>
            <option value="JS">Job Started</option>
            <option value="JC">Job Complete</option>
            <option value="V">Validate</option>
            <option value="S">Scheduled</option>
            <option value="US">Unscheduled</option>
            <option value="RS">Re-scheduled</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="jobWorker">
          <Form.Label>Assigned Worker</Form.Label>
          <Select
            instanceId="worker-select"
            isMulti
            options={workers}
            value={assignedWorkersOptions}
            onChange={handleWorkersChange}
            placeholder="Search Worker"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            placeholder="Enter start date"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            placeholder="Enter end date"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="startTime">
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleInputChange}
            placeholder="Enter start time"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="endTime">
          <Form.Label>End Time</Form.Label>
          <Form.Control
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleInputChange}
            placeholder="Enter end time"
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="estimatedDuration">
          <Form.Label>Estimated Duration</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              name="estimatedDurationHours"
              value={formData.estimatedDurationHours}
              onChange={handleInputChange}
              placeholder="Hours"
            />
            <InputGroup.Text>h</InputGroup.Text>
            <Form.Control
              type="number"
              name="estimatedDurationMinutes"
              value={formData.estimatedDurationMinutes}
              onChange={handleInputChange}
              placeholder="Minutes"
            />
            <InputGroup.Text>m</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Row>
      <hr className="my-4" />
      <p className="text-muted">Notification:</p>
      <Row className='mt-3'>
        <Form.Group controlId="adminWorkerNotify">
          <Form.Check
            type="checkbox"
            name="adminWorkerNotify"
            checked={formData.adminWorkerNotify}
            onChange={handleInputChange}
            label="Admin/Worker: Email Notify when Job Status changed and new Job message Submitted"
          />
        </Form.Group>
        <Form.Group controlId="customerNotify">
          <Form.Check
            type="checkbox"
            name="customerNotify"
            checked={formData.customerNotify}
            onChange={handleInputChange}
            label="Customer: Email Notify when Job Status changed and new Job message Submitted"
          />
        </Form.Group>
      </Row>
      <Row className="align-items-center">
        <Col md={{ span: 4, offset: 8 }} xs={12} className="mt-4">
          {/* <Button variant="primary" className="float-end" onClick={handleSubmit}>
            Submit
          </Button> */}
        </Col>
      </Row>
    </Form>
  );
};

export default JobScheduling;
