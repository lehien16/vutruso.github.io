// main.js
import { db } from './firebase-config.js';

let groupID = null;

// Tạo nhóm mới
function createGroup() {
  const groupName = document.getElementById('group-name').value.trim();
  if (groupName) {
    const groupRef = collection(db, 'groups');
    addDoc(groupRef, {
      name: groupName,
      careers: {},
    }).then(docRef => {
      groupID = docRef.id;
      const groupLink = `${window.location.href}?groupID=${groupID}`;
      document.getElementById('group-link-input').value = groupLink;
      document.getElementById('group-link').style.display = 'block';
      alert("Nhóm đã được tạo! Chia sẻ liên kết nhóm cho các thành viên khác.");
    }).catch(error => {
      alert("Đã xảy ra lỗi khi tạo nhóm: " + error.message);
    });
  } else {
    alert("Vui lòng nhập tên nhóm!");
  }
}
