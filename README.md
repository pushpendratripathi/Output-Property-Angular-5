# Output-Property-Angular-5
@Output decorator binds a property of a component to send data from one component (child component) to calling component (parent component). This is one way communication from child to parent component. @Output binds a property of the type of angular EventEmitter class. This property name becomes custom event name for calling component. @Output decorator can also alias the property name as @Output(alias) and now this alias name will be used in custom event binding in calling component.   The child component exposes an EventEmitter property with which it emits events when something happens. The parent binds to that event property and reacts to those events.