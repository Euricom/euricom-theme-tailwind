import type { MetaFunction } from '@remix-run/node';
import { toast } from 'sonner';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Checkbox } from '~/components/ui/checkbox';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '~/components/ui/dialog';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Switch } from '~/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Textarea } from '~/components/ui/textarea';

export const meta: MetaFunction = () => {
    return [{ title: 'Shadcn Theme' }];
};

export default function ShadcnThemePage() {
    return (
        <div className="space-y-8">

            <h1 className="text-4xl font-bold text-center">Shadcn Theme</h1>
            {/* Buttons Section */}
            <div className="grid grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Buttons</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                        <Button variant="default">Default</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                    </CardContent>
                </Card>

                {/* Form Controls */}
                <Card>
                    <CardHeader>
                        <CardTitle>Form Controls</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Input</Label>
                            <Input placeholder="Enter text..." />
                            <Label>Textarea</Label>
                            <Textarea placeholder="Enter text..." />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Accept terms</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch id="airplane" />
                            <Label htmlFor="airplane">Airplane Mode</Label>
                        </div>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Option 1</SelectItem>
                                <SelectItem value="2">Option 2</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>

                {/* Tabs Example */}
                <Card>
                    <CardHeader>
                        <CardTitle>Tabs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="account">
                            <TabsList>
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">Account settings here</TabsContent>
                            <TabsContent value="password">Password settings here</TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* States */}
                <Card>
                    <CardHeader>
                        <CardTitle>States</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button disabled variant="destructive">
                            Disabled Button
                        </Button>
                        <Input disabled placeholder="Disabled input" />
                        <div className="flex items-center space-x-2">
                            <Checkbox disabled checked />
                            <Label>Disabled Checkbox</Label>
                        </div>
                    </CardContent>
                </Card>

                {/* Dialog & Toast */}
                <Card>
                    <CardHeader>
                        <CardTitle>Dialog & Toast</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Are you sure?</DialogTitle>
                                    <DialogDescription>This action cannot be undone.</DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <Button variant="outline">Cancel</Button>
                                    <Button>Continue</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <Button
                            onClick={() => {
                                toast('This is a toast message');
                            }}
                        >
                            Show Toast
                        </Button>
                    </CardContent>
                </Card>

                {/* Radio Buttons */}
                <Card>
                    <CardHeader>
                        <CardTitle>Radio Group</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup defaultValue="comfortable">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1" />
                                <Label htmlFor="r1">Default</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="comfortable" id="r2" />
                                <Label htmlFor="r2">Comfortable</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="compact" id="r3" />
                                <Label htmlFor="r3">Compact</Label>
                            </div>
                        </RadioGroup>
                    </CardContent>
                </Card>

                {/* Table */}
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Table</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[50px]">Avatar</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    {
                                        initials: 'CN',
                                        name: 'John Doe',
                                        email: 'john@example.com',
                                        status: {
                                            label: 'Active',
                                            className: 'bg-green-100 text-green-800',
                                        },
                                    },
                                    {
                                        initials: 'JD',
                                        name: 'Jane Smith',
                                        email: 'jane@example.com',
                                        status: {
                                            label: 'Pending',
                                            className: 'bg-yellow-100 text-yellow-800',
                                        },
                                    },
                                ].map(user => (
                                    <TableRow key={user.email}>
                                        <TableCell>
                                            <Avatar>
                                                <AvatarFallback>{user.initials}</AvatarFallback>
                                            </Avatar>
                                        </TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status.className}`}
                                            >
                                                {user.status.label}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="sm">
                                                    Edit
                                                </Button>
                                                <Button variant="destructive" size="sm">
                                                    Delete
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
