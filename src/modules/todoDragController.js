export default class TodoDragController{
  static isDragging = false;
static currentDragElement = null;
static offset = { x: 0, y: 0 };
static containerBounds = null;

static getContainerBounds() {
  const container = document.querySelector('.project-todoList-container');
  containerBounds = container.getBoundingClientRect();
}

static handleMouseDown(event) {
  isDragging = true;
  currentDragElement = this;

  // Calculate the offset from the mouse click position to the element's position
  offset.x = event.clientX - currentDragElement.offsetLeft;
  offset.y = event.clientY - currentDragElement.offsetTop;

  // Add class for dragging style
  currentDragElement.classList.add('dragging');

  // Prevent text selection during dragging
  document.addEventListener('selectstart', preventTextSelection);
}

static handleMouseMove(event) {
  if (this.isDragging) {
    // Calculate new position
    const x = event.clientX - offset.x;
    const y = event.clientY - offset.y;

    // Limit movement within container bounds
    const maxX = containerBounds.width - currentDragElement.offsetWidth;
    const maxY = containerBounds.height - currentDragElement.offsetHeight;
    const constrainedX = Math.min(Math.max(0, x), maxX);
    const constrainedY = Math.min(Math.max(0, y), maxY);

    // Apply new position
    currentDragElement.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;
  }
}

static handleMouseUp() {
  if (this.isDragging) {
    // Remove class for dragging style
    currentDragElement.classList.remove('dragging');

    // Reset transforms
    currentDragElement.style.transform = '';

    // Reset variables
    isDragging = false;
    currentDragElement = null;
    offset = { x: 0, y: 0 };

    // Remove event listeners
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('selectstart', preventTextSelection);
  }
}

static preventTextSelection(event) {
  event.preventDefault();
}

// Add event listeners to make elements draggable
// const draggableElements = document.querySelectorAll('.draggable');
// draggableElements.forEach((element) => {
//   element.addEventListener('mousedown', handleMouseDown);
// });



}