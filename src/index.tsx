import { ActionPanel, Action, List } from "@raycast/api";
const characters = ["š", "đ", "č", "ć", "ž", "Š", "Đ", "Č", "Ć", "Ž"];

const ITEMS = characters.map((key) => {
  return {
    id: key,
    title: key,
  };
});

export default function Command() {
  return (
    <List>
      {ITEMS.map((item) => (
        <List.Item
          key={item.id}
          icon="list-icon.png"
          title={item.title}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard content={item.title} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
