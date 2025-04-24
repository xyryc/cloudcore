'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { placeOrder } from '@/store/features/orderSlice';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Product } from '@/types';

export default function PlaceOrderForm({ product }: { product: Product }) {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, success, error } = useSelector((state: RootState) => state.order);

    const [qty, setQty] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [courier, setCourier] = useState('redx');

    const handleOrder = () => {
        const orderPayload = {
            product_ids: `${product.id}`,
            s_product_qty: `${qty}`,
            c_name: name,
            c_phone: phone,
            address,
            courier,
            advance: null,
            cod_amount: product.price * qty,
            discount_amount: null,
            delivery_charge: '80',
        };

        dispatch(placeOrder(orderPayload));
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">Order</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Complete Your Order</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                    <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 w-full rounded" />
                    <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="border p-2 w-full rounded" />
                    <input placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} className="border p-2 w-full rounded" />
                    <select value={courier} onChange={e => setCourier(e.target.value)} className="border p-2 w-full rounded">
                        <option value="steadfast">Steadfast</option>
                        <option value="sundarban">Sundarban</option>
                        <option value="continental">Continental</option>
                        <option value="pathao">Pathao</option>
                        <option value="redx">Redx</option>
                    </select>
                    <input type="number" value={qty} onChange={e => setQty(Number(e.target.value))} className="border p-2 w-full rounded" min="1" />
                    <Button onClick={handleOrder} disabled={loading} className="w-full">
                        {loading ? 'Placing Order...' : 'Place Order'}
                    </Button>

                    {success && <p className="text-green-600">Order placed successfully!</p>}
                    {error && <p className="text-red-600">Error: {error}</p>}
                </div>
            </DialogContent>
        </Dialog>
    );
}
