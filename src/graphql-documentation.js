import React from "react";
import { Tab, Nav } from "react-bootstrap";

const GraphQLDocumentation = () => {
    return (
        <div className="container mt-5">
          <h1>Dokumentasi GraphQL API for Electrocardiogram (ECG)</h1>
          <p>
            Dokumentasi ini menjelaskan cara mengakses layanan GraphQL API untuk data Electrocardiogram atau ECG. Saat ini terdapat dua fitur utama yaitu untuk mengunggah dan mengambil data ECG dari Database.
          </p>
          <h3>API Endpoint:</h3>
          <pre>
          <code>http://&lt;IP-Address&gt;/api/graphql</code>
          </pre>
    
          <h2>Mutation UploadBatch</h2>
          <p>
            Operation ini digunakan untuk mengunggah file ECG berjenis CSV beserta nama pasien secara batch atau keseluruhan.
          </p>
          <Tab.Container id="upload-batch-tabs" defaultActiveKey="query">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="query">Query</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="penjelasan">Penjelasan</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="query">
                <pre>
                  <code>
                    {`mutation UploadBatch($file: Upload!, $patientName: String!) { 
      uploadBatch(file: $file, patientName: $patientName) 
    }`}
                  </code>
                </pre>
                <pre>
                  <code>
                    {`variable: {
      file: //file ECG
      patientName: "John Doe"
    }`}
                  </code>
                </pre>
              </Tab.Pane>
              
              <Tab.Pane eventKey="penjelasan">
                <table>
                  <thead>
                    <tr>
                      <th>Komponen</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>file</td>
                      <td>File CSV ECG yang akan diupload</td>
                    </tr>
                    <tr>
                      <td>patientName</td>
                      <td>Nama pasien yang datanya akan diupload</td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>

          <h3>Response</h3>
          <Tab.Container id="response-tabs" defaultActiveKey="sukses">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="sukses">Sukses</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="gagal">Gagal</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="sukses">
                <pre>
                  <code>
                    {`{
      "message": "File uploaded and data saved"
    }`}
                  </code>
                </pre>
              </Tab.Pane>
              <Tab.Pane eventKey="gagal">
                <pre>
                  <code>
                    {`{
      "message": "File upload failed"
    }`}
                  </code>
                </pre>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
    
          <h2>Mutation UploadStream</h2>
          <p>
            Operation ini digunakan untuk mengunggah file ECG berjenis CSV beserta nama pasien secara stream atau bertahap.
          </p>
          <Tab.Container id="upload-stream-tabs" defaultActiveKey="query">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="query">Query</Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
                <Nav.Link eventKey="penjelasan">Penjelasan</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="query">
                <pre>
                  <code>
                    {`mutation UploadStream($file: Upload!, $patientName: String!) { 
      uploadStream(file: $file, patientName: $patientName) 
    }`}
                  </code>
                </pre>
                <pre>
                  <code>
                    {`variable: {
      file: //file ECG
      patientName: "John Doe"
    }`}
                  </code>
                </pre>
              </Tab.Pane>
              
              <Tab.Pane eventKey="penjelasan">
                <table>
                  <thead>
                    <tr>
                      <th>Komponen</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>file</td>
                      <td>File CSV ECG yang akan diupload</td>
                    </tr>
                    <tr>
                      <td>patientName</td>
                      <td>Nama pasien yang datanya akan diupload</td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>

          <h3>Response</h3>
          <Tab.Container id="response-tabs" defaultActiveKey="sukses">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="sukses">Sukses</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="gagal">Gagal</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="sukses">
                <pre>
                  <code>
                    {`{
      "message": "File uploaded and data saved"
    }`}
                  </code>
                </pre>
              </Tab.Pane>
              <Tab.Pane eventKey="gagal">
                <pre>
                  <code>
                    {`{
      "message": "File upload failed"
    }`}
                  </code>
                </pre>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          <h2>Query EcgRecord</h2>
          <p>
            Operation ini digunakan untuk mendapatkan data ECG dari database berdasarkan nama pasien.
          </p>
          <Tab.Container id="ecg-record-tabs" defaultActiveKey="query">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="query">Query</Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
                <Nav.Link eventKey="penjelasan">Penjelasan</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="query">
                <pre>
                  <code>
                    {`query EcgRecord($patientName: String!) {
      ecgRecord(patientName: $patientName) {
        ecgData {
          index
          value
        }
      }
    }`}
                  </code>
                </pre>
                <pre>
                  <code>
                    {`variable: {
      patientName: "John Doe"
    }`}
                  </code>
                </pre>
              </Tab.Pane>
              
              <Tab.Pane eventKey="penjelasan">
                <table>
                  <thead>
                    <tr>
                      <th>Komponen</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>patientName</td>
                      <td>Nama pasien untuk mendapatkan data ECG</td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
    
          <h3>Response</h3>
          <Tab.Container id="response-tabs" defaultActiveKey="sukses">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="sukses">Sukses</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="gagal">Gagal</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="sukses">
                <pre>
                  <code>
                    {`{
  "data": {
    "ecgRecord": {
      "ecgData": [
        {
          "index": 1,
          "value": 0.5
        },
        {
          "index": 2,
          "value": 0.6
        }
        ...
      ]
    }
  }
}
`}
                  </code>
                </pre>
              </Tab.Pane>
              <Tab.Pane eventKey="gagal">
                <pre>
                  <code>
                    {`{
      "message": "File not found"
    }`}
                  </code>
                </pre>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
    
          <h2>Contoh Implementasi</h2>
          <Tab.Container id="implementation-tabs" defaultActiveKey="javascript-impl">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="javascript-impl">Javascript</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="python-impl">Python</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="java-impl">Java</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="javascript-impl">
                <pre>
                  <code>
                    {`// Contoh Implementasi JavaScript
    import { useMutation } from '@apollo/client';
    import gql from 'graphql-tag';
    
    const UPLOAD_BATCH = gql\`
      mutation UploadBatch($file: Upload!, $patientName: String!) {
        uploadBatch(file: $file, patientName: $patientName)
      }
    \`;
    
    const { data } = useMutation(UPLOAD_BATCH, {
      variables: { file: /* file object */, patientName: 'John Doe' },
    });
    `}
                  </code>
                </pre>
              </Tab.Pane>
              <Tab.Pane eventKey="python-impl">
                <pre>
                  <code>
                    {`# Contoh Implementasi Python
    import requests
    
    url = 'http://<IP-Address>/api/graphql'
    query = '''
      mutation UploadBatch($file: Upload!, $patientName: String!) {
        uploadBatch(file: $file, patientName: $patientName)
      }
    '''
    variables = {
      'file': open('file.csv', 'rb'),
      'patientName': 'John Doe'
    }
    response = requests.post(url, json={'query': query, 'variables': variables})
    print(response.json())
    `}
                  </code>
                </pre>
              </Tab.Pane>
              <Tab.Pane eventKey="java-impl">
                <pre>
                  <code>
                    {`// Contoh Implementasi Java
    import graphql.GraphQL;
    import graphql.schema.GraphQLObjectType;
    import graphql.schema.GraphQLFieldDefinition;
    import graphql.schema.GraphQLSchema;
    import graphql.GraphQL;
    
    public class GraphQLClient {
        public static void main(String[] args) {
            String query = "mutation UploadBatch($file: Upload!, $patientName: String!) { uploadBatch(file: $file, patientName: $patientName) }";
            // Implementasi untuk menjalankan query di GraphQL
        }
    }
    `}
                  </code>
                </pre>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      );
    };

export default GraphQLDocumentation;
