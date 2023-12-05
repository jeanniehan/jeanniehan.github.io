document.addEventListener('DOMContentLoaded', function () {
   const sidebar = document.getElementById('sidebar');
   const contentContainer = document.getElementById('content-container');

   const entries = [
       { name: 'Ghost Orchid', path: 'entries/entry_1/draft1/index.html', image: 'path/to/entry_1_image.jpg' },
       { name: 'Morning Glory', path: 'entries/entry_2/draft2/index.html', image: 'path/to/entry_2_image.jpg' },
       // Add more entries as needed
   ];

   entries.forEach((entry, index) => {
       const entryDiv = document.createElement('div');
       entryDiv.classList.add('entry');
       entryDiv.textContent = entry.name; // Display entry name for simplicity
       entryDiv.onclick = function() {
           showContent(entry);
       };

       sidebar.appendChild(entryDiv);
   });

   function showContent(entry) {
       // Remove existing content
       contentContainer.innerHTML = '';

       // Create new content element
       const content = document.createElement('div');
       content.classList.add('content');

       // Add content details
       const contentTitle = document.createElement('h2');
       contentTitle.textContent = entry.name;

       const contentIframe = document.createElement('iframe');
       contentIframe.src = entry.path;
       contentIframe.style.width = '100%';
       contentIframe.style.border = 'none'; // Remove iframe border

       // Append content details to the content element
       content.appendChild(contentTitle);
       content.appendChild(contentIframe);

       // Append the content element to the content container
       contentContainer.appendChild(content);
   }
});
