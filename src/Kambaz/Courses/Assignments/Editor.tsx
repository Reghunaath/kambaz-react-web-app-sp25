export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <b>Assignment Name</b>
      </label>{" "}
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" rows={10} cols={50}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis odio
        pulvinar leo viverra; amet sit maximus velit. Torquent platea non metus
        ultrices ultrices lobortis natoque neque. Efficitur felis mollis integer
        tellus parturient sollicitudin. Dis efficitur enim aptent senectus quis.
        Habitasse leo tortor viverra nisl euismod. Torquent lorem nulla, cras
        egestas conubia litora. Ac nibh scelerisque efficitur adipiscing
        himenaeos sapien. Vitae dolor tellus scelerisque sollicitudin orci
        aenean. Senectus pretium venenatis eleifend magnis ligula finibus.
      </textarea>
      <br />
      <table>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" name="AssignmentGroup">
              <option value="a1">Group 1</option>
              <option value="a2">Group 2</option>
              <option value="a3">Group 3</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as" name="GradeDisplay">
              <option value="g1">Percentage</option>
              <option value="g2">Points</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type" name="Submission Type">
              <option value="s1">Online</option>
              <option value="s2">Offline</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            Online Entry Options
            <br />
            <input
              type="checkbox"
              id="wd-text-entry"
              name="EntryOption"
              value="Text Entry"
            />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input
              type="checkbox"
              id="wd-website-url"
              name="EntryOption"
              value="Website URL"
            />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              id="wd-media-recordings"
              name="EntryOption"
              value="Media Recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              id="wd-student-annotation"
              name="EntryOption"
              value="Student Annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input
              type="checkbox"
              id="wd-file-upload"
              name="EntryOption"
              value="Website URL"
            />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-assign-to">Asign To</label>
            <br />
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date" name="due" value="2025-05-13" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-available-from">Available From</label>
            <br />
            <input
              type="date"
              id="wd-available-from"
              name="Available From"
              value="2025-05-06"
            />
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input
              type="date"
              id="wd-available-until"
              name="Until"
              value="2025-05-20"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
