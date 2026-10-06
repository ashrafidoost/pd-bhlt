import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact";

export const Route = createLazyFileRoute("/contact")({
  component: () => ContactRoute(),
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (formData) {
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form action={mutation.mutate}>
          <ContactInput
            type="text"
            name="name"
            placeholder="Name"
            disabled={mutation.isPending}
          />
          <ContactInput
            name="email"
            placeholder="Email"
            type="email"
            disabled={mutation.isPending}
          />
          <textarea
            placeholder="Message"
            name="message"
            disabled={mutation.isPending}
          />
          <button disabled={mutation.isPending}>Submit</button>
        </form>
      )}
    </div>
  );
}

function ContactInput(props) {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
  );
}
