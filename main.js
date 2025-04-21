import { db } from './firebase-config.js';

let groupID = null;

// Tạo nhóm mới
function createGroup() {
  const groupName = document.getElementById('group-name').value.trim();
  if (groupName) {
    // Thêm nhóm mới vào Firestore
    const groupRef = db.collection('groups');
    groupRef.add({
      name: groupName,
      careers: {}, // Mảng nghề nghiệp ban đầu rỗng
    }).then(docRef => {
      groupID = docRef.id;
      const groupLink = `${window.location.href}?groupID=${groupID}`;
      document.getElementById('group-link-input').value = groupLink;
      document.getElementById('group-link').style.display = 'block'; // Hiển thị liên kết nhóm
      alert("Nhóm đã được tạo! Chia sẻ liên kết nhóm cho các thành viên khác.");

      // Cập nhật danh sách nhóm mới
      displayGroups();
    }).catch(error => {
      alert("Đã xảy ra lỗi khi tạo nhóm: " + error.message);
    });
  } else {
    alert("Vui lòng nhập tên nhóm!");
  }
}

// Hiển thị các nhóm đã tạo
function displayGroups() {
  const groupList = document.getElementById('group-list');
  groupList.innerHTML = ''; // Làm trống danh sách nhóm trước khi hiển thị lại

  // Lấy tất cả các nhóm từ Firestore
  db.collection('groups').get().then(snapshot => {
    snapshot.forEach(doc => {
      const groupData = doc.data();
      const groupItem = document.createElement('li');
      groupItem.textContent = `Nhóm: ${groupData.name} (ID: ${doc.id})`;
      groupList.appendChild(groupItem);
    });
  }).catch(error => {
    alert("Đã xảy ra lỗi khi tải danh sách nhóm: " + error.message);
  });
}

// Tải danh sách nhóm khi trang được tải
window.onload = function() {
  displayGroups();
};
