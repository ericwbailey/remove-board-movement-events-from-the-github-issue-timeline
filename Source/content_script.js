timelineEventsContainer = []
timelineBoardMovementEvents = document.evaluate("//div[contains(@class, 'TimelineItem ') and (contains(., ' moved this to ') or contains(., ' moved this from ')) and (descendant::*[name()='svg' and contains(@class, 'octicon-table')])]", document, null, XPathResult.ANY_TYPE, null );
while (boardMovementEvent = timelineBoardMovementEvents.iterateNext()) {
  timelineEventsContainer.push(boardMovementEvent)
}

timelineEventsContainer.forEach((el) => {
  el.classList.toggle('d-none')
})
