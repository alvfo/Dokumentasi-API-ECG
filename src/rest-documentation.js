import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Nav,  } from "react-bootstrap";


const RestDocumentation = () => {
    return (
      <div className="container mt-5">
        <h1>Dokumentasi REST API for Electrocardiogram (ECG)</h1>
        <p>
          Dokumentasi ini menjelaskan cara mengakses layanan API untuk data
          Electrocardiogram atau ECG. Saat ini terdapat dua fitur utama, yaitu untuk
          mengunggah dan mengambil data ECG dari Database. Layanan ini memudahkan pengguna
          untuk mengelola data ECG pasien dengan cepat dan efisien.
        </p>
  
        {/* POST upload-batch */}
        <h2>POST /upload-batch</h2>
        <p>
          Method <strong>upload-batch</strong> digunakan untuk mengunggah file ECG
          berjenis CSV beserta nama pasien secara batch atau keseluruhan.
        </p>
        <ul>
          <li>URL: <code>http://&lt;IP-Address&gt;/api/rest/upload-batch</code></li>
          <li>Body:</li>
          <ul>
            <li><strong>patientName</strong> (text): Nama pasien yang ingin diupload data ECG-nya</li>
            <li><strong>age</strong> (text): Umur pasien yang ingin diupload data ECG-nya</li>
            <li><strong>gender</strong> (text): Jenis kelamin pasien yang ingin diupload data ECG-nya</li>
            <li><strong>recordingDate</strong> (text): Tanggal perekaman ECG pasien yang ingin diupload data ECG-nya</li>
            <li><strong>notes</strong> (text): Catatan pasien yang ingin diupload data ECG-nya</li>
            <li><strong>file</strong> (file): File CSV berisi data ECG yang ingin diupload</li>
          </ul>
        </ul>
  
        {/* Contoh Penggunaan */}
        <Tab.Container defaultActiveKey="javascript-batch">
          <h3>Contoh Penggunaan</h3>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="javascript-batch">Javascript</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="python-batch">Python</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="java-batch">Java</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="javascript-batch">
              <pre>
                <code>
                  {`const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const form = new FormData();
form.append('patientName', 'Nama Pasien');
form.append('file', fs.createReadStream('path/to/your/file.csv'));

axios.post('http://<IP-Address>/api/rest/upload-batch', form, {
  headers: {
    ...form.getHeaders()
  }
})
.then(response => {
  console.log('Success:', response.data);
})
.catch(error => {
  console.error('Error:', error);
});
`}
                </code>
              </pre>
            </Tab.Pane>
            <Tab.Pane eventKey="python-batch">
              <pre>
                <code>
                  {`import requests

url = 'http://<IP-Address>/api/rest/upload-batch'
files = {'file': ('file.csv', open('path/to/your/file.csv', 'rb'))}
data = {'patientName': 'Nama Pasien'}

response = requests.post(url, files=files, data=data)

print('Success:', response.json())
`}
                </code>
              </pre>
            </Tab.Pane>
            <Tab.Pane eventKey="java-batch">
              <pre>
                <code>
                  {`import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class UploadBatch {
    public static void main(String[] args) {
        String urlString = "http://<IP-Address>/api/rest/upload-batch";
        File file = new File("path/to/your/file.csv");
        String patientName = "Nama Pasien";

        try {
            URL url = new URL(urlString);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setDoOutput(true);
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "multipart/form-data; boundary=--boundary");

            try (OutputStream outputStream = conn.getOutputStream();
                 PrintWriter writer = new PrintWriter(new OutputStreamWriter(outputStream, "UTF-8"), true)) {

                // Write patientName
                writer.append("--boundary");
                writer.append("Content-Disposition: form-data; name=\"patientName\"");
                writer.append(patientName).append("\r");

                // Write file
                writer.append("--boundary");
                writer.append("Content-Disposition: form-data; name=\"file\"; filename=\"file.csv\"");
                writer.append("Content-Type: text/csv");
                writer.flush();

                try (FileInputStream inputStream = new FileInputStream(file)) {
                    byte[] buffer = new byte[1024];
                    int bytesRead;
                    while ((bytesRead = inputStream.read(buffer)) != -1) {
                        outputStream.write(buffer, 0, bytesRead);
                    }
                }

                writer.append("\r");
                writer.append("--boundary--\r");
                writer.flush();
            }

            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            System.out.println("Success: " + response.toString());

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
`}
                </code>
              </pre>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
  
        {/* Response */}
        <Tab.Container defaultActiveKey="sukses-batch">
          <h3>Response</h3>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="sukses-batch">Sukses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="gagal-batch">Gagal</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="sukses-batch">
              <pre>
                <code>{`{ "message": "File uploaded and data saved" }`}</code>
              </pre>
            </Tab.Pane>
            <Tab.Pane eventKey="gagal-batch">
              <pre>
                <code>{`{ "message": "File upload failed" }`}</code>
              </pre>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
  
        {/* POST upload-stream */}
        <h2>POST /upload-stream</h2>
        <p>
          Method <strong>upload-stream</strong> digunakan untuk mengunggah file ECG
          berjenis CSV beserta nama pasien secara stream atau bertahap.
        </p>
        <ul>
          <li>URL: <code>http://&lt;IP-Address&gt;/api/rest/upload-stream</code></li>
          <li>Body:</li>
          <ul>
            <li><strong>patientName</strong> (text): Nama pasien yang ingin diupload data ECG-nya</li>
            <li><strong>file</strong> (file): File CSV berisi data ECG yang ingin diupload</li>
          </ul>
        </ul>
  
        {/* Contoh Penggunaan */}
        <Tab.Container defaultActiveKey="javascript-stream">
          <h3>Contoh Penggunaan</h3>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="javascript-stream">Javascript</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="python-stream">Python</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="java-stream">Java</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="javascript-stream">
            <pre>
                <code>
                  {`const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const form = new FormData();
form.append('patientName', 'Nama Pasien');
form.append('file', fs.createReadStream('path/to/your/file.csv'));

axios.post('http://<IP-Address>/api/rest/upload-stream', form, {
  headers: {
    ...form.getHeaders()
  }
})
.then(response => {
  console.log('Success:', response.data);
})
.catch(error => {
  console.error('Error:', error);
});
`}
                </code>
              </pre>
            </Tab.Pane>
            <Tab.Pane eventKey="python-stream">
            <pre>
                <code>
                  {`import requests

url = 'http://<IP-Address>/api/rest/upload-stream'
files = {'file': ('file.csv', open('path/to/your/file.csv', 'rb'))}
data = {'patientName': 'Nama Pasien'}

response = requests.post(url, files=files, data=data)

print('Success:', response.json())
`}
                </code>
              </pre>
            </Tab.Pane>
            <Tab.Pane eventKey="java-stream">
            <pre>
                <code>
                  {`import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class UploadStream {
    public static void main(String[] args) {
        String urlString = "http://<IP-Address>/api/rest/upload-stream";
        File file = new File("path/to/your/file.csv");
        String patientName = "Nama Pasien";

        try {
            URL url = new URL(urlString);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setDoOutput(true);
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "multipart/form-data; boundary=--boundary");

            try (OutputStream outputStream = conn.getOutputStream();
                 PrintWriter writer = new PrintWriter(new OutputStreamWriter(outputStream, "UTF-8"), true)) {

                // Write patientName
                writer.append("--boundary");
                writer.append("Content-Disposition: form-data; name=\"patientName\"");
                writer.append(patientName).append("\r");

                // Write file
                writer.append("--boundary");
                writer.append("Content-Disposition: form-data; name=\"file\"; filename=\"file.csv\"");
                writer.append("Content-Type: text/csv");
                writer.flush();

                try (FileInputStream inputStream = new FileInputStream(file)) {
                    byte[] buffer = new byte[1024];
                    int bytesRead;
                    while ((bytesRead = inputStream.read(buffer)) != -1) {
                        outputStream.write(buffer, 0, bytesRead);
                    }
                }

                writer.append("\r");
                writer.append("--boundary--\r");
                writer.flush();
            }

            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            System.out.println("Success: " + response.toString());

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
`}
                </code>
              </pre>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
  
        {/* Response */}
        <Tab.Container defaultActiveKey="sukses-stream">
          <h3>Response</h3>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="sukses-stream">Sukses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="gagal-stream">Gagal</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="sukses-stream">
              <pre>
                <code>{`{ "message": "File uploaded and data saved" }`}</code>
              </pre>
            </Tab.Pane>
            <Tab.Pane eventKey="gagal-stream">
              <pre>
                <code>{`{ "message": "File upload failed" }`}</code>
              </pre>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
  
        {/* GET ecg/${patientName} */}
        <h2>GET /ecg/${`{patientName}`}</h2>
        <p>
          Method ini digunakan untuk mendapatkan data ECG dari database berdasarkan nama
          pasien.
        </p>
        <ul>
          <li>URL: <code>http://&lt;IP-Address&gt;/api/rest/ecg/{`{patientName}`}</code></li>
        </ul>
  
        {/* Contoh Penggunaan */}
        <Tab.Container defaultActiveKey="javascript-get">
          <h3>Contoh Penggunaan</h3>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="javascript-get">Javascript</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="python-get">Python</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="java-get">Java</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="javascript-get">
              <pre>
                <code>
                  {`const axios = require('axios');

const patientName = 'JohnDoe';  // Ganti dengan nama pasien yang sesuai
const url = 'http://<IP-Address>/api/rest/ecg/{patientName}';

axios.get(url)
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
`}
                </code>
              </pre>
            </Tab.Pane>
            <Tab.Pane eventKey="python-get">
              <pre>
                <code>
                  {`import requests

patient_name = 'JohnDoe'  # Ganti dengan nama pasien yang sesuai
url = f'http://<IP-Address>/api/rest/ecg/{patient_name}'

response = requests.get(url)

print('Success:', response.json())
`}
                </code>
              </pre>
            </Tab.Pane>
            <Tab.Pane eventKey="java-get">
              <pre>
                <code>
                  {`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class GetEcgData {
    public static void main(String[] args) {
        String patientName = "JohnDoe";  // Ganti dengan nama pasien yang sesuai
        String urlString = "http://<IP-Address>/api/rest/ecg/" + patientName;

        try {
            URL url = new URL(urlString);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            System.out.println("Success: " + response.toString());

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

`}
                </code>
              </pre>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
  
        {/* Response */}
        <Tab.Container defaultActiveKey="sukses-get">
          <h3>Response</h3>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="sukses-get">Sukses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="gagal-get">Gagal</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="sukses-get">
              <pre>
                <code>{`{
    "patientName": "JohnDoe",
    "ecgData": [
      { "index": "1", "value": 134 },
      { "index": "2", "value": 141 },
      ...
    ]
  }`}</code>
              </pre>
            </Tab.Pane>
            <Tab.Pane eventKey="gagal-get">
              <pre>
                <code>{`{ "message": "ECG data not found" }`}</code>
              </pre>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
  
        {/* Tabel Penjelasan */}
        <h3>Penjelasan Response:</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Komponen</th>
              <th>Tipe</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>patientName</td>
              <td>String</td>
              <td>Nama pasien</td>
            </tr>
            <tr>
              <td>ecgData</td>
              <td>Array</td>
              <td>Kumpulan data ECG</td>
            </tr>
            <tr>
              <td>index</td>
              <td>Number</td>
              <td>Index data ECG</td>
            </tr>
            <tr>
              <td>value</td>
              <td>Number</td>
              <td>Nilai dari data ECG</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RestDocumentation;
  
