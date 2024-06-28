import React from "react";
import {
    Tabs,
    Tab,
    Input,
    Select,
    SelectItem,
    Textarea,
    Link,
    Button,
    Card,
    CardBody,
    CardHeader,
} from "@nextui-org/react";

export default function Form() {
    const [selected, setSelected] = React.useState("agent");
    const [name, setName] = React.useState("");

    return (
        <div className="flex flex-col w-full 1.5SM:min-h-[580px]">
            <Tabs
                size="md"
                radius="lg"
                aria-label="Tabs form"
                selectedKey={selected}
                onSelectionChange={setSelected}
                classNames={{
                    tabList: "mx-auto py-1 px-[6px]",
                    // cursor: "w-full bg-[#22d3ee]",
                    // tab: ,
                    tabContent: ["px-[35px]"],
                }}
            >
                <Tab key="agent" title="Agent" className="p-0">
                    <form className="flex flex-col gap-[27px] pt-[27px] LG:gap-5 LG:pt-5">
                        <div className="flex flex-col gap-2 ">
                            <p className="text-sm text-[#9594a7] LG:text-xs">Templates</p>
                            <div className="flex flex-wrap gap-2 max-w-[400px]">
                                <Button
                                    radius="md"
                                    size="sm"
                                    className="bg-transparent text-sm border border-[#ececec] py-2 px-4 LG:text-xs LG:px-3 1.5SM:px-4"
                                    onClick={() => setName("Customer Support")}
                                >
                                    Customer Support
                                </Button>
                                <Button
                                    radius="md"
                                    size="sm"
                                    className="bg-transparent text-sm border border-[#ececec] py-2 px-4 LG:text-xs LG:px-3 1.5SM:px-4"
                                    onClick={() => setName("Content Writer")}
                                >
                                    Content Writer
                                </Button>
                                <Button
                                    radius="md"
                                    size="sm"
                                    className="bg-transparent text-sm border border-[#ececec] py-2 px-4 LG:text-xs LG:px-3 1.5SM:px-4"
                                    onClick={() => setName("HR Manager")}
                                >
                                    HR Manager
                                </Button>
                                <Button
                                    radius="md"
                                    size="sm"
                                    className="bg-transparent text-sm border border-[#ececec] py-2 px-4 LG:text-xs LG:px-4"
                                    onClick={() => setName("Seller Agent")}
                                >
                                    Seller Agent
                                </Button>
                                <Button
                                    radius="md"
                                    size="sm"
                                    className="bg-transparent text-sm border border-[#ececec] py-2 px-4 LG:text-xs LG:px-4"
                                    onClick={() => setName("Team Assistant")}
                                >
                                    Team Assistant
                                </Button>
                                <Button
                                    radius="md"
                                    size="sm"
                                    className="bg-transparent text-sm border border-[#ececec] py-2 px-4 LG:text-xs LG:px-4"
                                    onClick={() => setName("Software Engineer")}
                                >
                                    Software Engineer
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-[#9594a7] LG:text-xs">Agent Conversation Name</p>
                            <Input
                                type="text"
                                placeholder="Name"
                                size="md"
                                classNames={{
                                    input: ["bg-transparent", "placeholder:text-[#9594a7]", "text-base", "LG:text-sm"],
                                    innerWrapper: ["bg-transparent", ""],
                                    inputWrapper: ["h-[48px]", "bg-[#fdfdfd]", "border", "px-4", "LG:px-3", "LG:h-10"],
                                }}
                                isClearable
                                onClear={() => setName("")}
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-[#9594a7] LG:text-xs">Language Model</p>
                            <Select
                                variant="flat"
                                placeholder="Select model"
                                className=""
                                classNames={{
                                    mainWrapper: ["bg-[#fdfdfd]", ""],
                                    innerWrapper: ["bg-transparent", ""],
                                    trigger: ["bg-transparent", "border", "px-4", "h-[48px]", "LG:px-3", "LG:h-10"],
                                    value: "text-base LG:text-sm",
                                    base: "",
                                }}
                                aria-label="select model"
                            >
                                <SelectItem value="GPT 3.5 — Fast" aria-label="GPT 3.5 — Fast">
                                    GPT 3.5 — Fast
                                </SelectItem>
                                <SelectItem value="?" aria-label="?">
                                    ?
                                </SelectItem>
                                <SelectItem value="?" aria-label="?">
                                    ?
                                </SelectItem>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-[#9594a7] LG:text-xs">Goal</p>
                            <Textarea
                                placeholder="Write goal example"
                                classNames={{
                                    inputWrapper: [
                                        "bg-[#fdfdfd]",
                                        "border",
                                        "px-4",
                                        "py-3",
                                        "min-h-[100px]",
                                        "LG:px-3",
                                        "LG:h-10",
                                        "LG:py-0",
                                    ],
                                    input: "text-base LG:text-sm",
                                }}
                            />
                        </div>

                        <div className="flex gap-2 justify-end">
                            <Button
                                fullWidth
                                className="bg-surface/accent text-white h-[52px] text-[18px] LG:text-base"
                            >
                                Create Agent
                            </Button>
                        </div>
                    </form>
                </Tab>
                <Tab key="chat" title="Chat" className="p-0 ">
                    <div className="h-full flex justify-center items-center">
                        <p className="pt-36 text-3xl">What`s there?</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}
